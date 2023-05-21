#!/bin/bash

rootDir=$(basename "$PWD")
origin=$(git config --get remote.origin.url)

defaultOrg=$(echo "$origin" | sed -e 's/.*://g' -e 's/\.git$//' -e 's/:/\//' -e 's/\/.*//')
defaultRepo=$(echo "$origin" | awk -F/ '{print $2}' | sed -e 's/\.git$//' )
defaultHostname=hameetman.dev

# List of dependencies. These are dependencies used at runtime.
dependencies=(
	@nextui-org/react,
	@universe/address-parser,
	@welldone-software/why-did-you-render,
	core-js,
	history,
	lodash,
	path-browserify,
	react,
	react-dom,
	react-helmet,
	react-router-dom,
	regenerator-runtime,
	tailwindcss,
)

# List of dev dependencies. These will not be installed when NODE_ENV=production.
devDependencies=(
	@faker-js/faker,
	@pmmmwh/react-refresh-webpack-plugin,
	@rob.hameetman/eslint-config,
	@soda/friendly-errors-webpack-plugin,
	@testing-library/jest-dom,
	@testing-library/react,
	@testing-library/react-hooks,
	@testing-library/user-event,
	@types/cypress,
	@types/fetch-mock,
	@types/lodash,
	@types/node,
	@types/react,
	@types/react-dom,
	@types/react-helmet,
	@types/webpack-env,
	@typescript-eslint/eslint-plugin,
	autoprefixer,
	case-sensitive-paths-webpack-plugin,
	clean-webpack-plugin,
	copy-webpack-plugin,
	css-loader,
	css-minimizer-webpack-plugin,
	# cypress,
	# cypress-axe,
	# cypress-wait-until,
	dotenv,
	dotenv-conversion,
	eslint,
	eslint-plugin-react,
	eslint-webpack-plugin,
	# fetch-mock,
	html-webpack-plugin,
	husky,
	identity-obj-proxy,
	jest,
	jest-environment-jsdom,
	mini-css-extract-plugin,
	node-sass,
	postcss,
	postcss-loader,
	process,
	react-refresh,
	react-refresh-typescript,
	sass-loader,
	style-loader,
	stylelint,
	stylelint-config-recommended,
	stylelint-webpack-plugin,
	terser-webpack-plugin,
	ts-jest,
	ts-loader,
	typescript,
	webpack,
	webpack-bundle-analyzer,
	webpack-cli,
	webpack-dev-server,
	webpack-dev-server-waitpage,
)

# Define the list of placeholders
placeholders=(
  "{:name}"
  "{:repo}"
  "{:description}"
  "{:subdomain}"
  "{:hostname}"
  "{:auditor}"
	"{:nodejs}"
	"{:node}"
	"{:npm}"
  "{:react}"
  "{:typescript}"
  "{:webpack}"
)

# Inject placeholder values in files
injectPlaceholderValues() {
  local placeholder="$1"
  local value="$2"

  find . -type f -exec sed -i "s|$placeholder|$value|g" {} +
}

# Copy .env.example to .env
setupEnvVars() {
	if [ -f ".env" ]; then
		read -p "The .env file already exists. Do you want to overwrite it? (y/N): " overwrite
		overwrite=${overwrite:-"n"}

		if [[ $overwrite != ^[Yy]$ ]]; then
			return
		fi
	fi

	cp .env.example .env
}

# Get placeholder values
read -p "Enter the project name ($rootDir): " name
read -p "Enter the hostname where this project will be deployed ($defaultHostname): " hostname
read -p "Enter the subdomain where this project will be deployed ($rootDir): " subdomain
read -p "Enter a 1-2 sentence description: " description
read -p "Is this project for an interview take-home assessment? (Y/n): " isAssessment

if [[ $isAssessment == ^[Yy]$ ]]; then
	read -p "Please enter the name of the organization: " auditor
fi

org=${org:-$defaultOrg}
repo=${repo:-$defaultRepo}
hostname=${subdomain:-$defaultHostname}
subdomain=${subdomain:-$rootDir}
auditor=${auditor:-"N/A"}

nodejs=$(node -v)
nodejs=${nodejs#"v"}
node="${nodejs%%.*}"

npmjs=$(npm -v)
npm="${npmjs%%.*}"

react=grep -E '"version":' node_modules/react/package.json | awk -F'"' '{print $4}'
typescript=grep -E '"version":' node_modules/typescript/package.json | awk -F'"' '{print $4}'
webpack=grep -E '"version":' node_modules/wepback/package.json | awk -F'"' '{print $4}'

# Install dependencies
echo "Installing dependencies..."
npm i --legacy-peer-deps "${dependencies[@]}"

# Install dev dependencies
echo "Installing dev dependencies..."
npm i -D --legacy-peer-deps "${devDependencies[@]}"

# Inject placeholder values for each placeholder
for placeholder in "${placeholders[@]}"; do
  injectPlaceholderValues "$placeholder" "${!placeholder}"
done

# Copy .env.example to .env
echo "Setting up environment variables..."
setupEnvVars

echo "Setup complete!"

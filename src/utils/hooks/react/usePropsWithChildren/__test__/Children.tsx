import type { FC } from 'react';
import type { Size } from '@app/theme/enums/Sizes';
import type { Sizable } from '@app/utils/types/props/Sizable';

const firstChildProps = { size: 'md' as Size };
const secondChildProps = { size: 'md' as Size };

const FirstChild: FC<Sizable> = () => <div />;
const SecondChild: FC<Sizable> = () => <div />;

export const firstChild = <FirstChild {...firstChildProps} />;
export const secondChild = <SecondChild {...secondChildProps} />;

export const children = [firstChild, secondChild];

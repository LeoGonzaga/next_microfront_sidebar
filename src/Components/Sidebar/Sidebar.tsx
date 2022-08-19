/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

import { Styles } from './styles';

export const Sidebar = (): JSX.Element => {
    return <Styles.Container >
        <Styles.Logo>
        <img
            src="https://altu-assets.s3.sa-east-1.amazonaws.com/images/zenvia-logo.svg"
            alt="logo"
        />
        </Styles.Logo>
    </Styles.Container>;
}

import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { Props } from '@theme/Logo';

export default function Logo(props: Props): ReactNode {
    const {
        siteConfig: { title },
    } = useDocusaurusContext();
    const {
        navbar: { title: navbarTitle, logo },
    } = useThemeConfig();

    const { imageClassName, titleClassName, ...propsRest } = props;
    const logoLink = useBaseUrl(logo?.href || '/');
    const logoSrc = useBaseUrl(logo?.src || 'img/logo.svg');
    const fallbackAlt = navbarTitle ? '' : title;
    const alt = logo?.alt ?? fallbackAlt;

    return (
        <Link
            to={logoLink}
            {...propsRest}
            {...(logo?.target && { target: logo.target })}
            className="navbar__brand"
        >
            {logoSrc && <img src={logoSrc} alt={alt} className={imageClassName} height={28} />}
            {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
        </Link>
    );
}

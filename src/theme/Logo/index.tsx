import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { Props } from '@theme/Logo';
import AnimatedLogo from '@site/src/components/AnimatedLogo';

export default function Logo(props: Props): ReactNode {
    const {
        siteConfig: { title },
    } = useDocusaurusContext();
    const {
        navbar: { title: navbarTitle, logo },
    } = useThemeConfig();

    const { imageClassName, titleClassName, ...propsRest } = props;
    const logoLink = useBaseUrl(logo?.href || '/');

    // If visible title is shown, fallback alt text should be
    // an empty string to mark the logo as decorative.
    const fallbackAlt = navbarTitle ? '' : title;

    // Use logo alt text if provided (including empty string),
    // and provide a sensible fallback otherwise.
    const alt = logo?.alt ?? fallbackAlt;

    return (
        <Link
            to={logoLink}
            {...propsRest}
            {...(logo?.target && { target: logo.target })}
            className="navbar__brand"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
            <div className={imageClassName} style={{ display: 'flex', alignItems: 'center' }}>
                <AnimatedLogo />
            </div>
            {navbarTitle != null && (
                <b className={titleClassName} style={{ marginLeft: '12px', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                    {navbarTitle}
                </b>
            )}
        </Link>
    );
}

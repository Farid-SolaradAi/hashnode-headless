import { twJoin } from 'tailwind-merge';
import { useAppContext } from './contexts/appContext';
import PublicationLogo from './publication-logo';
import PublicationNavLinks from './publication-nav-links';
import PublicationSocialLinks from './publication-social-links';
import HeaderBlogSearch from './header-blog-search';
type Props = {
    currentMenuId?: string | null;
    isHome: boolean;
};

export const Header = (props: Props) => {
    const { currentMenuId, isHome } = props;
    const { publication } = useAppContext();

    return (
        <header
            className="blog-header relative w-full border-b border-black/10 bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70"
            style={{ background: 'linear-gradient(35deg, #fb6340 0, #fbb140 100%)' }}
        >
            <div className="container mx-auto px-2 md:px-4 2xl:px-10">
                <div className="relative z-40 flex flex-row items-center justify-between py-1">
                    <div className="flex flex-row items-center">
                        {/* <div className={twJoin('md:hidden', 'dark:text-white')}>
                            <PublicationLogo publication={publication} size="sm" />
                        </div> */}
                        <div className="hidden md:block">
                        </div>
                    </div>
                </div>

                {/* Mobile view logo */}
                {/* <div className="mx-auto my-1 flex w-1/4 flex-row items-center justify-center md:hidden">
                    <PublicationLogo publication={publication} size="sm" />
                </div> */}

                <div className="blog-sub-header" data-testid="blog-sub-header">
                    {/* Desktop */}
                    <div className="justify-between mx-0 hidden w-full flex-row items-center md:flex">
                        <PublicationSocialLinks links={publication.links} />
						{/* <div className={twJoin('flex flex-row items-center w-3', 'dark:text-white')}> */}
                        {/* Removed HeaderBlogSearch for size reduction */}
						<HeaderBlogSearch publication={publication} />
                    {/* </div> */}
                    </div>
                    {/* Mobile view */}
                    <div className="flex w-full flex-col items-center md:hidden">
                        <PublicationSocialLinks links={publication.links} />
                    </div>
                </div>

                <div
                    className="relative  hidden flex-row items-center justify-center overflow-hidden text-lg text-white md:flex"
                    data-tom="hidden md:flex relative flex-row items-center justify-center overflow-hidden text-md "
                >
                    <PublicationNavLinks
                        isHome={isHome}
                        currentActiveMenuItemId={currentMenuId}
                        enabledPages={publication.preferences?.enabledPages}
                        navbarItems={publication.preferences?.navbarItems || []}
                    />
                </div>
            </div>
        </header>
    );
};

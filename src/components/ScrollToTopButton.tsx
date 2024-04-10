import LogoImageBlue from '../assets/imgs/logo-icon-name-h.svg';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        // Check if the key pressed is 'Enter' or 'Space'
        if (event.key === 'Enter' || event.key === ' ') {
            handleScrollToTop();
        }
    };

    return (
        <button
            onClick={handleScrollToTop}
            onKeyDown={handleKeyPress}
            tabIndex={0}
        >
            <img src={LogoImageBlue} width="194px" height="29px" alt="logo" />
        </button>
    );
};

export default ScrollToTopButton
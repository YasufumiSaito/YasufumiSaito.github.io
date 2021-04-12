export default function () {
    const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    const width = window.innerWidth;
    window.addEventListener('resize', ()=>{
        if (width !== window.innerWidth) {
            setFillHeight();
        }
    });
    setFillHeight();
}
import { useEffect, useState } from "react"

const useInViewPort = <T extends HTMLElement>(ref:React.RefObject<T>, option?:IntersectionObserverInit) => {
const [inViewport,setInViewport]=useState(false);
const [hasBeenInView, setHasBeenInView] = useState(false);
useEffect( () => {
    const observe = new IntersectionObserver(([entry])=>{
        if (entry.isIntersecting && !hasBeenInView) {
            setInViewport(true);
            setHasBeenInView(true);
        }
    }, option);
    const currentRef = ref.current;
    if(currentRef) {
        observe.observe(currentRef);
    }
    return () => {
        if(currentRef){
            observe.unobserve(currentRef);
        }
    };
}, [ref,option,hasBeenInView]);
return inViewport;
}
export default useInViewPort;
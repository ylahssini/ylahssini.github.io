import { useEffect } from "react";

export default function useOutsideClick(ref: any, callback: () => void, excluded: string[]) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target) && !excluded.includes(event.target.offsetParent.id)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

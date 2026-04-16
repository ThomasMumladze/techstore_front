import { useState, useEffect, useRef } from "react";

const useDropdown = () => {
    //component state to track dropdown open/close status
    const [isOpen, setIsOpen] = useState(false);

    // Ref for the dropdown element
    const dropdownRef = useRef<HTMLDivElement>(null);

    //toggle dropdown open/close
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    //set dropdown to close
    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        // handle outside click & close dropdown
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };

        //check if dropdown is open and add event listener for outside clicks
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        // Cleanup event listener on unmount or when dropdown is closed
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return { isOpen, toggleDropdown, dropdownRef };
};

export default useDropdown;

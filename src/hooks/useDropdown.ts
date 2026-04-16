import { useState, useEffect, useRef, useCallback } from "react";

const useDropdown = () => {
    //component state to track dropdown open/close status
    const [isOpen, setIsOpen] = useState(false);

    // Ref for the dropdown element
    const dropdownRef = useRef<HTMLDivElement>(null);

    //toggle dropdown open/close
    const toggleDropdown = useCallback(() => {
        setIsOpen((state) => !state);
    }, []);

    //set dropdown to close
    const closeDropdown = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        // Close dropdown when component unmounts
        return () => {
            closeDropdown();
        };
    }, [closeDropdown]);

    useEffect(() => {
        if (!isOpen) return;

        // handle outside click & close dropdown
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        // Cleanup event listener on unmount or when dropdown is closed
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, closeDropdown]);

    return { isOpen, toggleDropdown, dropdownRef };
};

export default useDropdown;

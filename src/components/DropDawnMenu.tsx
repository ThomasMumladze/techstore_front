interface Props {
    dropdownRef: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
}

const DropDawnMenu = (props: Props) => {
    const { dropdownRef, isOpen } = props;

    return (
        <div className={`drop-dawn-menu ${isOpen ? "open" : "closed"}`} ref={dropdownRef}>
            <ul className="drop-dawn-menu_list">
                <li>Accessories</li>
                <li>Cables </li>
                <li>Computer Processors </li>
                <li>Graphic Cards </li>
                <li>Motherboard </li>
                <li>Peripherals </li>
                <li>Memory (RAM) </li>
            </ul>
        </div>
    );
};

export default DropDawnMenu;

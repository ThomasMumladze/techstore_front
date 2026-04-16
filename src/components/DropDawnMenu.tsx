interface Props {
    isOpen: boolean;
}

const DropDawnMenu = (props: Props) => {
    const { isOpen } = props;

    return (
        <div className={`drop-dawn-menu ${isOpen ? "drop-dawn-menu-open" : ""}`}>
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

interface Properties {
    className: string;
}

export default function Search(properties: Properties) {
    console.log("<Search/>");
    return <svg
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        className={properties.className}
    >
        <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2"/>
        <path d="M20 20L17 17" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
    </svg>
}


const MoreIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <g>
                <path fill="currentColor" d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
            </g>
        </svg>
    )
}

const PrimeIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path>
            </g>
        </svg>
    )
}

const NotificationIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <g><path fillRule="evenodd" d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z" clipRule="evenodd"></path></g>
        </svg>
    )
}


const BitIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <path fillRule="evenodd" clipRule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"></path>
        </svg>
    )
}

const WhisperIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <g><path fillRule="evenodd" d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z" clipRule="evenodd"></path></g>
        </svg>
    )
}


const SearchIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <g>
                <path fillRule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clipRule="evenodd"></path>
            </g>
        </svg>
    )
}

const CollapseIcon = ({ size }) => {
    return (
        <svg width={size} height={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
            <g>
                <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
            </g>
        </svg>
    )
}
const Icon = ({ name, size }) => {
    const icons = {
        more: MoreIcon,
        search: SearchIcon,
        prime: PrimeIcon,
        bit: BitIcon,
        whisper: WhisperIcon,
        notification: NotificationIcon,
        collapse:CollapseIcon,
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}
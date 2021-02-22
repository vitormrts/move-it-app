export function ExperienceBar() {
    return (
        <header className="l-header">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }}/>
                <span className="l-header__current-experience" style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    )
}
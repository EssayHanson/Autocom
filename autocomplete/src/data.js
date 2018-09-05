export function getShows() {
    return [
        { abbr: 'BLACKLIST', name: 'Blacklist' },
        { abbr: 'BLACKMIRROR', name: 'Black Mirror' },
        { abbr: 'BREAKINGBAD', name: 'Breaking Bad' },
        { abbr: 'POWER', name: 'Power' },
        { abbr: 'NARCOS', name: 'Narcos' },
        { abbr: 'WHOISAMERICA', name: 'Who is America' },
        { abbr: 'WESTWORLD', name: 'West world' }
    ]
}

export function matchShows(state, value) {
        return (
            state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
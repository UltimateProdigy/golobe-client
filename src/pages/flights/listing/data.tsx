export const getFlightImage = (key: string) => {
    switch (key) {
        case 'Emirates':
            return '/src/assets/emirates_bg.png';
        case 'Fly Dubai':
            return '/src/assets/emirates_bg.png';
        case 'Qatar Airways':
            return '/src/assets/qatar.jpg';
        case 'Etihad Airways':
            return '/src/assets/etihad.jpg';
        default:
            return '/src/assets/etihad.jpg';
    }
}

export const getFlightIcon = (key: string) => {
    switch (key) {
        case 'Emirates':
            return '/src/assets/emirates.png';
        case 'Fly Dubai':
            return '/src/assets/flydubai.png';
        case 'Qatar Airways':
            return '/src/assets/qatar.png';
        case 'Etihad Airways':
            return '/src/assets/etihad.png';
        default:
            return '/src/assets/etihad.jpg';
    }
}
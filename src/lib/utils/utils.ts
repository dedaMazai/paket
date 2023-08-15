function formatNumber(value: number | undefined, digits: number = 0): string {
    if (value || value === 0) {
        const arrayValue = value.toFixed(digits).split('.');
        const numFormat = Intl.NumberFormat();

        if (digits === 0) {
            return `${numFormat.format(Number(arrayValue[0]))}`;
        }
        return `${numFormat.format(Number(arrayValue[0]))}.${arrayValue[1]}`;
    }

    return '';
}

function formatDate(value?: string, withTime?: boolean): string {
    if (value) {
        const date = new Date(value);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();

        if (!withTime) {
            return `${dd}.${mm}.${yyyy}`;
        }

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        // return `${mm}/${dd}/${yyyy} ${hours}:${minutes}:${seconds}`;
        return `${dd}.${mm}.${yyyy} ${hours}:${minutes}`;
    }

    return '';
}

function formatTimeFromSeconds(seconds?: number): string {
    if (seconds) {
        const hour = (seconds - (seconds % 3600)) / 3600;
        const minAfterHour = (seconds - (hour * 3600));

        const min = (minAfterHour - (minAfterHour % 60)) / 60;

        const sec = (seconds - (hour * 3600) - (min * 60));

        return `${
            hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')
        }`;
    }
    return '00:00:00';
}

function download(type: string, data: string | number | boolean, name?: string) {
    let dataTrack = '';
    const a = document.createElement('a');

    switch (type) {
        case 'xml':
            dataTrack = 'bpmn';
            break;
        case 'svg':
            dataTrack = 'svg';
            break;
        case 'json':
            dataTrack = 'json';
            break;
        default:
            break;
    }

    name = name || `diagram.${dataTrack}`;

    a.setAttribute(
        'href',
        `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(
            data,
        )}`,
    );
    a.setAttribute('target', '_blank');
    a.setAttribute('dataTrack', `diagram:download-${dataTrack}`);
    a.setAttribute('download', name);

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export const GlobalUtils = {
    formatNumber,
    formatDate,
    download,
    formatTimeFromSeconds,
};

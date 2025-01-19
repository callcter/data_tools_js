interface ReportPeriodDict {
    [key: string]: string;
    '03-31': string;
    '06-30': string;
    '09-30': string;
    '12-31': string;
}

const dict_md_bgq: ReportPeriodDict = {
    '03-31': '一季报',
    '06-30': '半年报',
    '09-30': '三季报',
    '12-31': '年报'
};

const dict_md_djd: ReportPeriodDict = {
    '03-31': '一季度',
    '06-30': '二季度',
    '09-30': '三季度',
    '12-31': '四季度'
};

export function format_rpd_cn(rpd: string, is_djd: boolean = false): string {
    const y = rpd.substring(0, 4);
    const md = rpd.substring(5, 10);
    const dict = is_djd ? dict_md_djd : dict_md_bgq;
    return `${y}${dict[md]}`;
}

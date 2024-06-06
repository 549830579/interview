function getCommonCol(span: number, offset: number = 0) {
    const breakpoints: string[] = ['sm', 'md', 'lg', 'xl', 'xxl'];
    let col: Record<string, { span: number, offset: number }> = {
        xs: {
            span: 24,
            offset: 0,
        },
    };

    breakpoints.forEach(key => {
        col[key] = {
            span,
            offset,
        };
    });

    return col;
}

export {
    getCommonCol
}

import React from 'react'

const showTotal = (total, range) => `${range[0]}-${range[1]} de ${total} itens.`

const Pagination = (size = 'small',
                    showQuickJumper = true,
                    showSizeChanger = true,
                    pageSizeOptions = ['10', '20', '30', '40', '50']) => ({
    showSizeChanger,
    pageSizeOptions,
    size,
    showTotal,
    showQuickJumper
})

export default Pagination;

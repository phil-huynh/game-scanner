module.exports.createItemObject = (row) => {
  const dataObject = {}
  const columns = [
    'pcID',
    'consoleName',
    'productName',
    'loosePrice',
    'cibPrice',
    'newPrice',
    'gradedPrice',
    'boxOnlyPrice',
    'manualOnlyPrice',
    'gamestopPrice',
    'gamestopTradePrice',
    'retailLooseBuy',
    'retailLooseSell',
    'retailCibBuy',
    'retailCibSell',
    'retailNewBuy',
    'retailNewSell',
    'upc',
    'salesVolume',
    'genre',
    'asin',
    'epid',
    'releaseDate',
  ]

  columns.forEach((column, i) => {
    if (row[i]) {
      dataObject[column] = row[i];
    }
  });

  return dataObject;
}
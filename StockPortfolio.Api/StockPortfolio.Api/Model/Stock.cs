using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockPortfolio.Api.Model
{
    public class Stock
    {
        public string StockName { get; set; }
        public string StockCode { get; set; }
        public string Quantity { get; set; }
        public string UnitPrice { get; set; }
    }
}

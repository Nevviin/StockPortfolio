using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockPortfolio.Api.Model;

namespace StockPortfolio.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        [HttpPost]
        public IActionResult SaveItem(Stock stock)
        {
            var statusView = new StockViewModel { MyStock = stock, Status = "new Stock added to your portfolio successfully" };
           return Ok(statusView);
        }

        [HttpGet]
        public IActionResult GetStock()
        {
            return Ok(
            new Stock 
            { Quantity = "2"
            , StockCode = "MSFT"
            , StockName = "Microsoft Corporation"
            , UnitPrice = "208.90"
            }
            );
        }
    }
}
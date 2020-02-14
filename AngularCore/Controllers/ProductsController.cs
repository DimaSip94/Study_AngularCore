using AngularCore.Infrastructure;
using AngularCore.Managers;
using AngularCore.Models;
using AngularCore.Models.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCore.Controllers
{
    [Route("api/products")]
    public class ProductsController : BaseController
    {
        private IEFProductManager eFProductManager;
        private IMapper mapper;
        public ProductsController(IHttpContextAccessor httpContextAccessor, IEFProductManager eFProductManager, IMapper mapper) : base(httpContextAccessor)
        {
            this.eFProductManager = eFProductManager;
            this.mapper = mapper;
        }

        [HttpGet]
        public JsonResult Get()
        {
            int total = 0;
            List<Product> products = eFProductManager.GetProducts(out total);
            List<ProductViewModel> result = mapper.Map<List<Product>, List<ProductViewModel>>(products);
            return Json(new { items = result });
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ProductViewModel product = mapper.Map<Product, ProductViewModel>(eFProductManager.GetProduct(id));
            return Json(new { product = product });
        }

        [HttpPost]
        public IActionResult Post([FromBody]ProductViewModel product)
        {
            bool result = true;
            string errorMsg = "";
            var created = eFProductManager.SaveProduct(mapper.Map<ProductViewModel, Product>(product));
            result = created.IsSuccess;
            errorMsg = created.ErrorMessage;
            return Json(new { result, errorMsg });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            bool result = true;
            string errorMsg = "";
            var created = eFProductManager.DeleteProduct(id);
            result = created.IsSuccess;
            errorMsg = created.ErrorMessage;
            return Json(new { result, errorMsg });
        }
    }
}

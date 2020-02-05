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
        public IEnumerable<ProductViewModel> Get()
        {
            int total = 0;
            List<Product> products = eFProductManager.GetProducts(out total);
            List<ProductViewModel> result = mapper.Map<List<Product>, List<ProductViewModel>>(products);
            return result;
        }

        [HttpGet("{id}")]
        public ProductViewModel Get(int id)
        {
            ProductViewModel product = mapper.Map<Product, ProductViewModel>(eFProductManager.GetProduct(id));
            return product;
        }

        [HttpPost]
        public IActionResult Post([FromBody]ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                eFProductManager.SaveProduct(mapper.Map<ProductViewModel, Product>(product));
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            eFProductManager.DeleteProduct(id);
            return Ok(id);
        }
    }
}

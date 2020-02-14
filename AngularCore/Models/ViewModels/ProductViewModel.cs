using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCore.Models.ViewModels
{
    public class ProductViewModel
    {
        public int productID { get; set; }
        [Required(ErrorMessage = "Please enter а product name")]
        public string name { get; set; }
        [Required(ErrorMessage = "Please enter а product description")]
        public string description { get; set; }
        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Please enter а product price")]
        public decimal price { get; set; }
        [Required(ErrorMessage = "Please enter а product category")]
        public string category { get; set; }
        public int cartLineID { get; set; }
        public int logoID { get; set; }
        public IFormFile logoFile { get; set; }
        public string logoPath { get; set; }
    }
}

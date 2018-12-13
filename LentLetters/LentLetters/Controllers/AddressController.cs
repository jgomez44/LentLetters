using LentLetters.Models;
using LentLetters.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace LentLetters.Controllers
{
    [RoutePrefix("api/addresses")]
    public class AddressController : ApiController
    {
        //readonly AddressService addressService = new AddressService();
        readonly IAddressService addressService;

        public AddressController(IAddressService addressService)
        {
            this.addressService = addressService;
        }
        //above gives you dependency injection

        [HttpGet, Route]
        public List<Address> GetAll()
        {
            return addressService.GetAll();
        }

        [HttpPost, Route]
        public int Create(AddressCreate model)
        {
            return addressService.Create(model);
        }

        [HttpDelete, Route("{id:int}")]
        public void Delete(int id)
        {
            addressService.Delete(id);
        }
    }
}
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
            //if (!ModelState.IsValid)
            //{
            //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            //};

            //int newId = addressService.Create(model);

            //return Request.CreateResponse(HttpStatusCode.OK, newId);
            return addressService.Create(model);

        }
    }
}
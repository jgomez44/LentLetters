using System.Collections.Generic;
using LentLetters.Models;

namespace LentLetters.Services
{
    public interface IAddressService
    {
        int Create(AddressCreate req);
        List<Address> GetAll();
    }
}
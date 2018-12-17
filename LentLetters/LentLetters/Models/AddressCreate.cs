using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LentLetters.Models
{
    public class AddressCreate
    {
        [Required, MaxLength(100), MinLength(1)]
        public string FirstName { get; set; }

        [Required, MaxLength(100), MinLength(1)]
        public string LastName { get; set; }

        [MaxLength(100), MinLength(1)]
        public string Street { get; set; }

        [MaxLength(100), MinLength(1)]
        public string City { get; set; }

        [MaxLength(100), MinLength(1)]
        public string State { get; set; }

        [MaxLength(5), MinLength(5)]
        public string Zip { get; set; }

        public string Letter { get; set; }

        public DateTime? SendDate { get; set; }
        
    }
}
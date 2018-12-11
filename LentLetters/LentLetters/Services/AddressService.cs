using LentLetters.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data;

namespace LentLetters.Services
{
    public class AddressService
    {

        public List<Address> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Addresses_GetAll";//name of stored procedure
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var addresses = new List<Address>();

                    while (reader.Read())//loop will be called once for every row
                    {
                        var address = new Address();
                        address.Id = (int)reader["Id"];
                        address.FirstName = (string)reader["FirstName"];
                        address.LastName = (string)reader["LastName"];
                        address.Street = (string)reader["Street"];
                        address.City = (string)reader["City"];
                        address.State = (string)reader["State"];
                        address.Zip = (int)reader["Zip"];
                        address.SendDate = (DateTime)reader["SendDate"];
                        address.DateCreated = (DateTime)reader["DateCreated"];
                        address.DateModified = (DateTime)reader["DateModified"];

                        addresses.Add(address);
                    }

                    return addresses;
                }
            }
        }

        public int Create(AddressCreate req)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Addresses_Insert";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@FirstName", req.FirstName);
                cmd.Parameters.AddWithValue("@LastName", req.LastName);
                cmd.Parameters.AddWithValue("@Street", req.Street);
                cmd.Parameters.AddWithValue("@City", req.City);
                cmd.Parameters.AddWithValue("@State", req.State);
                cmd.Parameters.AddWithValue("@Zip", req.Zip);
                cmd.Parameters.AddWithValue("@SendDate", req.SendDate);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;
            }
        }


        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);
            con.Open();
            return con;
        }
    }
}
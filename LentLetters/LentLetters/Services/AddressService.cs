using LentLetters.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data;
using System.Net;
using AngleSharp.Parser.Html;

namespace LentLetters.Services
{
    public class AddressService : IAddressService
    {

        public List<Address> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Addresses_GetAll";//name of stored procedure
                cmd.CommandType = CommandType.StoredProcedure;

                var results = new List<Game>();

                var webClient = new WebClient();
                var html = webClient.DownloadString("https://www.kongregate.com/games_for_your_site");

                var parser = new HtmlParser();
                var document = parser.Parse(html);
                var games = document.QuerySelector("table.sponsoredgames");

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
                        address.Zip = (string)reader["Zip"];
                        address.SendDate = (DateTime)reader["SendDate"];
                        address.DateCreated = (DateTime)reader["DateCreated"];
                        address.DateModified = (DateTime)reader["DateModified"];
                        address.GameTitle = games.QuerySelector(".game_title").TextContent.Trim();
                        address.EmbedValue = games.QuerySelector("input").GetAttribute("value").Trim();

                        addresses.Add(address);
                    }

                    return addresses;
                }
            }
        }

        public void Update(AddressUpdate req)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Addresses_Update";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", req.Id);
                cmd.Parameters.AddWithValue("@FirstName", req.FirstName);
                cmd.Parameters.AddWithValue("@LastName", req.LastName);
                cmd.Parameters.AddWithValue("@Street", req.Street);
                cmd.Parameters.AddWithValue("@City", req.City);
                cmd.Parameters.AddWithValue("@State", req.State);
                cmd.Parameters.AddWithValue("@Zip", req.Zip);
                cmd.Parameters.AddWithValue("@SendDate", req.SendDate);

                cmd.ExecuteNonQuery();
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

        public void Delete(int id)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Addresses_Delete";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", id);
                cmd.ExecuteNonQuery();
            }
        }

        public Address SelectAddressById(int id)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Addresses_SelectAddressById";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                using (var reader = cmd.ExecuteReader())
                {
                    if (!reader.Read())
                    {
                        return null;
                    }

                    var address = new Address();
                    address.Id = (int)reader["Id"];
                    address.FirstName = (string)reader["FirstName"];
                    address.LastName = (string)reader["LastName"];
                    address.Street = (string)reader["Street"];
                    address.City = (string)reader["City"];
                    address.State = (string)reader["State"];
                    address.Zip = (string)reader["Zip"];
                    address.SendDate = (DateTime)reader["SendDate"];
                    address.DateCreated = (DateTime)reader["DateCreated"];
                    address.DateModified = (DateTime)reader["DateModified"];

                    return address;
                }
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
interface ISort
{
     int SortNumber { get; set; }

} 


class Person : ISort
{
    public int SortNumber { get; set; }
}

class Product : ISort
{
    public int SortNumber { get; set; }
}

class OrderManager
{
    void Manage(ISort sort){

        return SortNumber * 1.18;
    }
}
export class order
{
  constructor(public order_id:number,
              public order_date:Date,
              public order_amount:number,
              public fk_product_id:String,
              public fk_category_id:String,
              public order_status:number
              ){}
}

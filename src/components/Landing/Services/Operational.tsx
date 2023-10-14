import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Operational = () => {
  return (
    <div className="h-full w-full flex flex-col-reverse gap-8 md:gap-0 justify-center items-center md:flex-row md:justify-between px-4">
      <div className="w-full h-full flex  md:w-1/2 relative">
        <div className="grid grid-cols-1 gap-8 text-gray-500 sm:gap-12 md:grid-cols-2 lg:grid-cols-2 dark:text-gray-400">
          <Card>
            <CardHeader>
              <div className="w-full flex justify-center">
                <Image
                  src={"/assets/images/icons/customerchurn.png"}
                  alt="Customer Lifetime value"
                  width={50}
                  height={50}
                />
              </div>
              <CardTitle className="text-center pt-4">Customer Churn</CardTitle>
            </CardHeader>
            <CardContent>
              Customer churn refers to the rate at which customers stop using a
              company&apos;s products or services. It is a key metric for
              businesses
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-full flex justify-center">
                <Image
                  src={"/assets/images/icons/ConversationRateModeling.png"}
                  alt="Customer Lifetime value"
                  width={50}
                  height={50}
                />
              </div>
              <CardTitle className="text-center pt-4">
                Conversation Rate Modeling
              </CardTitle>
            </CardHeader>
            <CardContent>
              Conversion Rate Modeling (CRM) is a data-driven approach to
              predict and optimize conversion rates in marketing and sales,
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-full flex justify-center">
                <Image
                  src={"/assets/images/icons/CustomerLifetimevalue.png"}
                  alt="Customer Lifetime value"
                  width={50}
                  height={50}
                />
              </div>
              <CardTitle className="text-center pt-3">
                Customer Lifetime value
              </CardTitle>
            </CardHeader>
            <CardContent>
              Customer Lifetime Value (CLV) quantifies the total revenue a
              customer is expected to generate for a business over their entire
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-full flex justify-center">
                <Image
                  src={"/assets/images/icons/CustomerWinback.png"}
                  alt="Customer Lifetime value"
                  width={50}
                  height={50}
                />
              </div>
              <CardTitle className="text-center pt-4">
                Customer Winback
              </CardTitle>
            </CardHeader>
            <CardContent>
              Customer winback is a strategic process to re-engage former
              customers who have stopped using a company&apos;s products or
              services,
            </CardContent>
          </Card>
        </div>
        <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
      </div>
      <div className="w-full h-full flex justify-center  md:justify-end md:w-1/2">
        <div className="font-bold pt-10 text-center md:text-end space-y-5 w-80">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
            <h1>
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Operational Analytics
              </span>
            </h1>
          </div>
          <div className=" text-zinc-600 text-xs md:text-sm text-center md:text-end  font-normal">
            Customer analytics involves collecting and analyzing data to
            understand customer behavior and preferences. It helps businesses
            make data-driven decisions, improve marketing, and enhance customer
            experiences. By leveraging customer data, companies can boost
            satisfaction, loyalty, and competitiveness in a data-centric
            business environment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operational;

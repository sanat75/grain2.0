import {
  BsCameraVideo,
  BsChatLeftDots,
  BsImages,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaCode } from "react-icons/fa";
export const ToolsData = [
  {
    id: 1,
    name: "Marketing Mix Modelling",
    route: "/dashboard/conversation",
    icon: BsChatLeftDots,
    image: "/assets/images/tools/chatbot.svg",
    heading: "Complete your marketing measurement and optimize budget",
    description:
      "A tool that enables automated conversations with users, simulating human-like interactions to answer questions, provide information, and assist with various tasks.",
  },
  {
    id: 2,
    name: "Predictive Campaign ROAS",
    route: "/dashboard/music",
    icon: BsMusicNoteBeamed,
    image: "/assets/images/tools/music.svg",
    heading: "Predict ROAS early to focus on high-value audiences",
    description:
      "Predict your channels performance so you can refine your channel mix and budget allocation. Know which channels will drive the highest future value and take immediate action. Grains action-oriented MMM solution makes it easy to improve results.",
  },
  {
    id: 3,
    name: "Campaign Optimization",
    route: "/dashboard/image",
    icon: BsImages,
    image: "/assets/images/tools/image.svg",
    heading: "Boost campaigns with predictive analytics",
    description:
      "Discover a campaigns total value and likely return on ad spend (ROAS) early by predicting and aggregating customer lifetime value.  Invest more in campaigns that will drive long-term value, and avoid over-investing in those that don’t produce high-value customers.",
  },
  {
    id: 4,
    name: "Customer Churn",
    route: "/dashboard/video",
    image: "/assets/images/tools/video.svg",
    icon: BsCameraVideo,
    heading: "Keep your customers engaged for the long haul",
    description:
      "Identify which of your customers are most likely to churn. Use predictions to proactively improve retention and drive customer lifetime value. Boost yourretention campaigns through rapid experimentation, increased success rates, and enhanced ROI. Feed predictions directly into your CRM, marketing automation, and other systems of record to activate campaigns and drive ROI.",
  },
  {
    id: 5,
    name: "Lead Scoring",
    route: "/dashboard/code",
    image: "/assets/images/tools/code.svg",
    icon: FaCode,
    heading:
      "Prioritize the right leads with predictions and watch revenue rise",
    description:
      "Feed AI-generated predictions directly into your CRM so teams can prioritize deals most likely to close. Dont waste time and money on leads that wont go anywhere. With scores at their fingertips, your revenue teams will work more efficiently than ever.",
  },
];

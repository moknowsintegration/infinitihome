import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';

// Blog data embedded directly - no external import needed
const blogPosts = [
  {
    id: 1,
    slug: "signs-aging-parent-needs-home-care",
    title: "10 Signs Your Aging Parent May Need Home Care",
    excerpt: "Recognizing when a loved one needs extra help can be difficult. Learn the key warning signs that indicate it may be time to consider professional home care services.",
    category: "Family Caregiving",
    author: "INFINITI Care Team",
    date: "December 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=400&fit=crop",
    content: `
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">As our parents age, it can be challenging to know when they need extra support. Many seniors are reluctant to admit they need help, and family members may not notice gradual changes. Here are 10 warning signs that indicate it may be time to consider professional home care services.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Difficulty with Daily Activities</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">If your parent is struggling with basic activities like bathing, dressing, grooming, or using the bathroom, this is often one of the first signs that assistance is needed. Look for signs like wearing the same clothes repeatedly, body odor, or unkempt appearance.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Unexplained Weight Loss or Poor Nutrition</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Check their refrigerator and pantry. Are there expired foods? Is the fridge empty? Unexplained weight loss can indicate they're not eating properly, either due to difficulty cooking, forgetting to eat, or inability to shop for groceries.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Forgetting Medications</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Medication mismanagement is serious and can lead to health emergencies. Signs include missed doses, double-dosing, expired prescriptions, or confusion about what medications to take and when.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Increased Falls or Balance Issues</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Falls are the leading cause of injury among seniors. If your parent has fallen recently, has unexplained bruises, or seems unsteady on their feet, they may need assistance with mobility and daily activities.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Social Withdrawal and Isolation</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Has your parent stopped participating in activities they once enjoyed? Are they seeing friends less often? Social isolation can lead to depression and cognitive decline, and may indicate they need companionship and support.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Neglected Home and Bills</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">A previously tidy home that's now cluttered, dirty, or in disrepair can signal declining abilities. Similarly, unopened mail, unpaid bills, or calls from creditors may indicate cognitive or organizational difficulties.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes in Mood or Personality</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Depression, anxiety, mood swings, or personality changes can indicate underlying health issues or difficulty coping with aging. A professional caregiver can provide emotional support and alert family members to concerns.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Difficulty Driving or Getting Around</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">New dents on the car, traffic tickets, or getting lost on familiar routes are warning signs. If your parent can no longer drive safely, they'll need help with transportation to appointments, shopping, and social activities.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Caregiver Burnout in Family Members</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">If you or other family members are feeling overwhelmed, exhausted, or strained from providing care, it may be time to bring in professional help. Caregiver burnout is real and can affect your own health and relationships.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Recent Health Changes or Hospital Stays</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">After a hospitalization, surgery, or new diagnosis, many seniors need additional support during recovery. Professional home care can help prevent readmission and ensure proper healing.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do Next</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">If you've noticed one or more of these signs, it's time to have a conversation with your parent about home care options. At INFINITI Home Care Enterprise, we offer free consultations to assess your loved one's needs and create a personalized care plan.</p>

      <p class="text-gray-700 mb-4 leading-relaxed">Remember, accepting help isn't a sign of weakness—it's a way to maintain independence and quality of life while ensuring safety and well-being.</p>
    `
  },
  {
    id: 2,
    slug: "understanding-georgia-medicaid-waiver-programs",
    title: "Understanding Georgia Medicaid Waiver Programs",
    excerpt: "A comprehensive guide to Georgia's Medicaid waiver programs including CCSP, SOURCE, NOW, and COMP. Learn how to qualify and what services are covered.",
    category: "Insurance & Payment",
    author: "INFINITI Care Team",
    date: "December 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    content: `
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">Georgia offers several Medicaid waiver programs that help seniors and individuals with disabilities receive care in their homes instead of nursing facilities. Understanding these programs can help you or your loved one access the care needed while maintaining independence.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Medicaid Waiver Programs?</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Medicaid waiver programs "waive" certain Medicaid requirements to allow individuals who would otherwise need nursing home care to receive services in their homes or community settings. These programs are often more cost-effective and allow people to remain in familiar surroundings.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">CCSP - Community Care Services Program</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">The Community Care Services Program (CCSP) is Georgia's largest home and community-based waiver program for seniors aged 65 and older.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Eligibility Requirements:</h3>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Age 65 or older</li>
        <li>Meet nursing home level of care requirements</li>
        <li>Meet Medicaid financial eligibility</li>
        <li>Able to live safely in the community with services</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Services Covered:</h3>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Personal care services</li>
        <li>Homemaker services</li>
        <li>Adult day health services</li>
        <li>Emergency response systems</li>
        <li>Home-delivered meals</li>
        <li>Respite care</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">SOURCE - Service Options Using Resources in a Community Environment</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">SOURCE is a managed care program that coordinates medical care and home/community-based services for eligible seniors.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Key Features:</h3>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Care coordination by a dedicated team</li>
        <li>Combines medical and support services</li>
        <li>Focus on preventing hospitalizations</li>
        <li>Available in select Georgia counties</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">NOW/COMP Waivers</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">The New Options Waiver (NOW) and Comprehensive Supports Waiver (COMP) serve individuals with intellectual and developmental disabilities.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Apply</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">The application process for Georgia Medicaid waiver programs typically involves contacting your local Area Agency on Aging, completing a Medicaid application, undergoing a Level of Care assessment, and choosing a service provider like INFINITI Home Care Enterprise.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">We Can Help</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Navigating Medicaid waiver programs can be confusing. At INFINITI Home Care Enterprise, we're experienced in working with all Georgia Medicaid programs and can help guide you through the process. Contact us for a free consultation to discuss your options.</p>
    `
  },
  {
    id: 3,
    slug: "benefits-of-companion-care-for-seniors",
    title: "The Benefits of Companion Care for Seniors",
    excerpt: "Loneliness and isolation can significantly impact senior health. Discover how companion care services provide social engagement and improve quality of life.",
    category: "Senior Wellness",
    author: "INFINITI Care Team",
    date: "December 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=400&fit=crop",
    content: `
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">Loneliness has been called a "silent epidemic" among seniors, with studies showing it can be as harmful to health as smoking 15 cigarettes a day. Companion care offers a solution that goes beyond basic assistance—it provides meaningful human connection.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Loneliness Epidemic</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">According to the National Institute on Aging, social isolation and loneliness affect a significant number of adults aged 65 and older. Risk factors include living alone, loss of family or friends, chronic illness, and hearing loss.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Health Impacts of Isolation</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Research has linked social isolation in seniors to increased risk of dementia, heart disease, stroke, higher rates of depression and anxiety, and weakened immune system.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Companion Care?</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Companion care focuses on providing social interaction and emotional support, along with light assistance with daily activities. Unlike personal care or skilled nursing, companion care emphasizes friendship and engagement.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Companion Care Services Include:</h3>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>Conversation and companionship</strong> - Simply having someone to talk to and share experiences with</li>
        <li><strong>Recreational activities</strong> - Playing cards, puzzles, reading together, or enjoying hobbies</li>
        <li><strong>Outings and transportation</strong> - Trips to restaurants, shopping, religious services, or social events</li>
        <li><strong>Light housekeeping</strong> - Keeping the living space tidy and comfortable</li>
        <li><strong>Meal preparation</strong> - Cooking nutritious meals and sharing mealtimes together</li>
        <li><strong>Medication reminders</strong> - Ensuring medications are taken on schedule</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Is Companion Care Right for Your Loved One?</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Companion care may be ideal if your loved one lives alone and has limited social contact, has recently lost a spouse or close friend, seems depressed or withdrawn, needs light assistance but not medical care, or would benefit from regular outings and activities.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">At INFINITI Home Care Enterprise, our companion caregivers are carefully selected for their warmth, patience, and genuine interest in connecting with seniors. Contact us to learn more about how companion care can enhance your loved one's quality of life.</p>
    `
  },
  {
    id: 4,
    slug: "how-to-choose-right-home-care-agency",
    title: "How to Choose the Right Home Care Agency",
    excerpt: "Not all home care agencies are created equal. Learn what questions to ask and what to look for when selecting a home care provider for your loved one.",
    category: "Family Caregiving",
    author: "INFINITI Care Team",
    date: "November 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
    content: `
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">Choosing a home care agency is one of the most important decisions you'll make for your aging loved one. With so many options available, how do you find the right fit? Here's a comprehensive guide to help you make an informed choice.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 1: Assess Your Needs</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Before contacting agencies, understand what level of care is needed: Companion Care for socialization and light housekeeping, Personal Care for bathing, dressing, and mobility assistance, or Skilled Nursing for medication management and medical monitoring.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 2: Verify Licensing and Credentials</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">In Georgia, home care agencies must be licensed by the state. Always verify state licensure is current, the agency is bonded and insured, caregivers have proper certifications, and background checks are conducted on all employees.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 3: Ask the Right Questions</h2>
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">About the Agency:</h3>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>How long have you been in business?</li>
        <li>Are you licensed, bonded, and insured?</li>
        <li>Do you accept our insurance/Medicaid/payment method?</li>
        <li>Is there 24/7 support available?</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">About Caregivers:</h3>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>How do you screen and hire caregivers?</li>
        <li>What training do caregivers receive?</li>
        <li>How do you match caregivers with clients?</li>
        <li>Who provides backup if a caregiver is sick?</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags to Watch For</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Reluctance to provide licensing information</li>
        <li>No background check policy</li>
        <li>High-pressure sales tactics</li>
        <li>Poor communication or unresponsiveness</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose INFINITI Home Care Enterprise</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">At INFINITI Home Care Enterprise, we welcome your questions and scrutiny. We're fully licensed, bonded, and insured in Georgia, with carefully vetted caregivers and transparent pricing. Contact us for a free, no-obligation consultation.</p>
    `
  },
  {
    id: 5,
    slug: "managing-medications-at-home",
    title: "Managing Medications at Home: A Caregiver's Guide",
    excerpt: "Proper medication management is crucial for seniors. This guide covers tips for organizing medications, preventing errors, and knowing when to seek help.",
    category: "Health Tips",
    author: "INFINITI Care Team",
    date: "November 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop",
    content: `
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">The average senior takes four or more prescription medications daily. Managing these medications correctly is crucial for health and safety, yet medication errors are alarmingly common. Here's how to help your loved one stay safe and organized.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Risks of Medication Mismanagement</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Medication errors in seniors can lead to adverse drug reactions, hospitalizations, worsening of medical conditions, dangerous drug interactions, and unnecessary healthcare costs.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Medication Organization Strategies</h2>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Use a Pill Organizer</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Weekly pill organizers with compartments for each day (and time of day) are invaluable. Look for ones with large compartments and easy-open lids.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Create a Medication List</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Maintain a current list that includes medication name, dosage and frequency, what it's for, prescribing doctor, and special instructions.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Set Up Reminders</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Use smartphone alarms, automated pill dispensers, or link medication times to daily routines like meals.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">When Professional Help Is Needed</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Consider professional home care assistance if your loved one frequently forgets to take medications, has had medication-related hospitalizations, takes multiple medications with complex schedules, or has cognitive impairment.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">INFINITI Home Care Enterprise caregivers are trained in medication reminders and can help ensure your loved one takes the right medications at the right times. Contact us to learn more.</p>
    `
  },
  {
    id: 6,
    slug: "self-care-tips-for-family-caregivers",
    title: "Self-Care Tips for Family Caregivers",
    excerpt: "Caring for a loved one can be exhausting. Learn essential self-care strategies to prevent burnout and maintain your own health while caregiving.",
    category: "Family Caregiving",
    author: "INFINITI Care Team",
    date: "November 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
    content: `
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">If you're caring for an aging parent or loved one, you're not alone. Over 53 million Americans serve as family caregivers, often at significant cost to their own health and well-being. Here's how to care for yourself while caring for others.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Recognizing Caregiver Burnout</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Caregiver burnout is a state of physical, emotional, and mental exhaustion. Warning signs include feeling overwhelmed or constantly worried, feeling tired most of the time, sleeping too much or too little, becoming easily irritated, and losing interest in activities you used to enjoy.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Self-Care Strategies</h2>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Accept That You Need Support</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Many caregivers feel guilty taking time for themselves. Remember: you cannot pour from an empty cup. Taking care of yourself isn't selfish—it's necessary.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Build a Support Network</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Join a caregiver support group, stay connected with friends and family, and don't be afraid to ask for specific help.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Take Regular Breaks</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Respite care isn't a luxury—it's a necessity. Options include adult day programs, in-home respite care, and family taking shifts.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">4. Maintain Your Health</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Aim for 7-8 hours of sleep, exercise even just 15-20 minutes daily, eat balanced meals, and don't skip your own doctor appointments.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Care Is Not Giving Up</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Bringing in professional caregivers doesn't mean you've failed. It means you're making a wise decision to ensure your loved one gets proper care while preserving your own well-being.</p>

      <p class="text-gray-700 mb-4 leading-relaxed">At INFINITI Home Care Enterprise, we work alongside family caregivers, providing support that allows you to step back from hands-on care while staying involved. Contact us to learn about our respite care and regular home care services.</p>
    `
  }
];

// Helper function to get a post by slug
const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link to="/blog" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="absolute top-6 left-6 flex items-center text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </button>
      </div>

      {/* Article Content */}
      <article className="relative -mt-20 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium flex items-center">
              <Tag size={14} className="mr-1" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readTime}
            </span>
          </div>

          {/* Article Body */}
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Need Home Care Services?</h3>
            <p className="text-purple-100 mb-6">
              INFINITI Home Care Enterprise provides compassionate, professional care in the Atlanta area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4702645566"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Call (470) 264-5566
              </a>
              <Link
                to="/contact"
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-400 transition border-2 border-white"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;

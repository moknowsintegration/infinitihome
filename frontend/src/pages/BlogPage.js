import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop"
  }
];

// Get all categories
const getAllCategories = () => {
  const categories = ['All Posts', ...new Set(blogPosts.map(post => post.category))];
  return categories;
};

// Get posts by category
const getPostsByCategory = (category) => {
  if (category === 'All Posts') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const categories = getAllCategories();
  const posts = getPostsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Care Insights Blog</h1>
            <p className="text-lg sm:text-xl text-purple-100">
              Expert advice, tips, and resources for families navigating home care.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                  category === selectedCategory
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-purple-100 text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Tag size={12} className="mr-1" />
                      {post.category}
                    </span>
                    <span className="flex items-center text-xs sm:text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest caregiving tips, resources, 
              and updates from INFINITI Home Care.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
              />
              <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition whitespace-nowrap">
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Need Help With Home Care?</h2>
            <p className="text-purple-100 mb-8 text-base sm:text-lg">
              Our team is here to answer your questions and help you find the 
              right care solution for your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4702645566"
                className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Call (470) 264-5566
              </a>
              <Link
                to="/contact"
                className="bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-purple-400 transition border-2 border-white"
              >
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;

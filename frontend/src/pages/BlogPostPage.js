import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/data/blogData';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
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
      <article className="relative -mt-20 mx-auto max-w-4xl px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium flex items-center">
              <Tag size={14} className="mr-1" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
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
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-gray-900
              prose-a:text-purple-600 prose-a:hover:text-purple-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Need Home Care Services?</h3>
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
            <div className="grid md:grid-cols-3 gap-6">
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

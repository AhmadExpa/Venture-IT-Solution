export async function updateBlog(id, blogData) {
  await dbConnect();
  try {
    // Add updatedAt timestamp
    const updatedBlogData = {
      ...blogData,
      updatedAt: new Date()
    };
    
    const updatedBlog = await BlogPost.findByIdAndUpdate(
      id,
      updatedBlogData,
      { new: true }
    );
    
    if (!updatedBlog) {
      throw new Error('Blog not found');
    }
    
    return updatedBlog;
  } catch (error) {
    throw new Error(`Failed to update blog: ${error.message}`);
  }
}
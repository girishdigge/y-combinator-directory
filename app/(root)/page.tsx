import StartupCard from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Ashley' },
      _id: 1,
      description: 'This is a description.',
      image:
        'https://yt3.ggpht.com/yti/ANjgQV9MLXRJGkNoWlOYBZlSx14MAczj8m2r8IY32pfCDYdeghQ=s88-c-k-c0x00ffffff-no-rj',
      category: 'Robots',
      title: 'We Robots',
    },
  ];
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading '>
          Pitch your Startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};
export default Home;

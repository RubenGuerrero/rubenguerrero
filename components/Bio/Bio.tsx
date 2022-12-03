import Image from 'next/image';

export const Bio = () => (
  <div className='mb-5 mt-4 mx-auto text-center md:sticky md:top-5'>
    <div className='flex justify-center'>
      <div>
        <Image
          src='/avatar.png'
          className='w-24 rounded-full'
          alt='Rubén Guerrero'
          width={96}
          height={96}
        />
      </div>
    </div>
    <div className='ml-2'>
      <p className='pt-1 font-bold'>Rubén Guerrero Sánchez</p>
      <p className='mb-2 text-gray-600 text-sm'>Senior Software Engineer</p>
      <div className='text-center text-sm'>
        <div>
          <a
            href='mailto:yo@rubenguerrero.com'
            className='inline-block align-middle h-8 hover:underline leading-none'
          >
            yo@rubenguerrero.com
          </a>
        </div>
      </div>
    </div>
  </div>
);
function Header2({ children, bannerImage }) {
  return (
    <div className="h-[400px] md:h-screen">
      <div
        className="h-full w-full justify-center md:flex  md:items-center 
        "
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPositionY: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Header2;

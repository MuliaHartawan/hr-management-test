export const RenderGoogleMap = ({ location, width, height }: {
    width: string;
    height: string;
    location: string;
}) => {
    return (
        <div>
            <iframe
                src={`${location}&output=embed`}
                width={`${width}`}
                height={`${height}`}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};
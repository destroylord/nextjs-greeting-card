export default function VideoSection() {
    return (
        <div className="container py-5 text-center">
            <h2 className="mb-4">A Special Message</h2>
            <video controls className="w-100 rounded">
                <source src="/video/birthday-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

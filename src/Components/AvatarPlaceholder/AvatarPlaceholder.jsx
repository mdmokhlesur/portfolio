const activePixels = new Set([1, 3, 5, 6, 8, 9, 10, 14, 17, 22]);

const AvatarPlaceholder = ({ className = "", label = "Mokhlesur Rahman" }) => {
    return (
        <span className={`${className} avatar-placeholder`} aria-label={label}>
            <span className="avatar-placeholder-grid" aria-hidden="true">
                {Array.from({ length: 25 }).map((_, index) => (
                    <span
                        key={index}
                        className={activePixels.has(index) ? "avatar-pixel is-active" : "avatar-pixel"}
                    />
                ))}
            </span>
        </span>
    );
};

export default AvatarPlaceholder;

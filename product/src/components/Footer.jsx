import "./css/footer.css"
export default function Footer() {
  return (
    <div className="footer">
        <p className="footer-text">
            Copyright text &copy; {new Date().getFullYear()}
        </p>
    </div>
  )
}


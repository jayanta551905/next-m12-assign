export default function Contact() {
  return (
    <div className="form-control w-96 mx-auto">
      <form>
        <label className="label">Your Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <br />
        <label className="label">Your Email: </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <br />
        <label className="label">Website name: </label>
        <input
          type="text"
          placeholder="Type your website name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <br />
        <label className="label">Message</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs"
        />
        <br />
        <br />
        <button className="btn btn-wide" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

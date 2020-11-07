export class CourseView {
  async activate(params, route) {
    const url = `https://tutors-svelte.netlify.app/#/course/${params.courseurl}`;
    window.location.replace(url);
  }
}

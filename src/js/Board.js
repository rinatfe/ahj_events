export default class Board {
  constructor(board) {
    this.board = board;
    this.boardEl = document.getElementById('board');
  }

  renderBoard() {
    const fields = [];
    for (const [i, row] of this.board.entries()) {
      for (const [j, value] of row.entries()) {
        fields.push(`
                <div class="field ${value ? 'busy' : 'free'}" 
                    data-row="${i}" 
                    data-col="${j}"
                    style="grid-row:${i + 1};grid-column:${j + 1};"
                >
                  ${value || ''}
                </div>
              `);
      }
    }
    this.boardEl.innerHTML = fields.join('');
  }
}
